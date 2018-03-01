import os
import uuid
import boto

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


def rename_all_s3_files(bucket):
    AWS_STORAGE_BUCKET_NAME=bucket
    AWS_STORAGE_REGION='eu-west-2'

    conn = boto.s3.connect_to_region(AWS_STORAGE_REGION)
    bucket = conn.get_bucket(AWS_STORAGE_BUCKET_NAME)

    for k in bucket.list():
        if ' ' in k.key:
            bucket.copy_key(k.key.replace(' ', '-'), bucket.name, k.key)
            bucket.delete_key(k.key)
