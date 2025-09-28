import os
import uuid
import boto3
from botocore.exceptions import ClientError

from django.utils.text import slugify


def slugify_filename(filename):
    filename, file_extension = os.path.splitext(filename)
    filename = slugify(filename)
    return filename + file_extension


def generate_upload_destination_path(folder_name):
    unique_id = uuid.uuid4()

    def inner(filename):
        filename = slugify_filename(filename)
        print('{}/{}/{}'.format(
            folder_name,
            unique_id,
            filename
        ))
        return '{}/{}/{}'.format(
            folder_name,
            unique_id,
            filename
        )
    return inner


def rename_all_s3_files(bucket_name):
    """
    Rename all S3 files that contain spaces in their keys.
    This function uses boto3 instead of the deprecated boto2.
    """
    try:
        # Create S3 client
        s3_client = boto3.client('s3', region_name='eu-west-2')
        
        # List all objects in the bucket
        paginator = s3_client.get_paginator('list_objects_v2')
        page_iterator = paginator.paginate(Bucket=bucket_name)
        
        for page in page_iterator:
            if 'Contents' in page:
                for obj in page['Contents']:
                    key = obj['Key']
                    if ' ' in key:
                        new_key = key.replace(' ', '-')
                        # Copy object with new key
                        copy_source = {'Bucket': bucket_name, 'Key': key}
                        s3_client.copy_object(
                            CopySource=copy_source,
                            Bucket=bucket_name,
                            Key=new_key
                        )
                        # Delete original object
                        s3_client.delete_object(Bucket=bucket_name, Key=key)
                        print(f"Renamed: {key} -> {new_key}")
                        
    except ClientError as e:
        print(f"Error renaming S3 files: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
