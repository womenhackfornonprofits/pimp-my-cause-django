#!/usr/bin/env python
import os
import sys
import dotenv


if __name__ == "__main__":

    load_env_file = os.environ.get("LOAD_ENV_FILE", False)

    if load_env_file:
        dotenv.read_dotenv()

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "pimpmycause.settings.development")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)

