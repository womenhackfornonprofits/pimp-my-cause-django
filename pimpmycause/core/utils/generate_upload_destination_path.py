import os
import uuid

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
