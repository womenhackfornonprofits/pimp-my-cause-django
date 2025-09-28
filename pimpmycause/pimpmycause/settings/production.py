from pimpmycause.settings import *
import dj_database_url
from env_utils import (
    get_list,
)
DEBUG = False

import os
GDAL_LIBRARY_PATH = os.environ.get('GDAL_LIBRARY_PATH')
GEOS_LIBRARY_PATH = os.environ.get('GEOS_LIBRARY_PATH')

database_url = os.environ.get('DATABASE_URL')
if database_url:
    db_from_env = dj_database_url.config(default=database_url, conn_max_age=500)
    if db_from_env:
        DATABASES['default'].update(db_from_env)
        DATABASES['default']['ENGINE'] = 'django.contrib.gis.db.backends.postgis'
    else:
        # Manual parsing if dj_database_url fails
        import urllib.parse as urlparse
        url = urlparse.urlparse(database_url)
        DATABASES['default'] = {
            'ENGINE': 'django.contrib.gis.db.backends.postgis',
            'NAME': url.path[1:],  # Remove leading slash
            'USER': url.username,
            'PASSWORD': url.password,
            'HOST': url.hostname,
            'PORT': url.port or 5432,
        }
else:
    # Fallback database configuration
    DATABASES['default'] = {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.environ.get('DB_NAME', 'pimpmycause'),
        'USER': os.environ.get('DB_USER', ''),
        'PASSWORD': os.environ.get('DB_PASSWORD', ''),
        'HOST': os.environ.get('DB_HOST', ''),
        'PORT': os.environ.get('DB_PORT', ''),
    }

# SECURITY
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

SECRET_KEY = get_env("SECRET_KEY")
ALLOWED_HOSTS = get_list('ALLOWED_HOSTS', separator=',')

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = get_env("SENDGRID_USERNAME")
EMAIL_HOST_PASSWORD = get_env("SENDGRID_PASSWORD")
EMAIL_PORT = 587
EMAIL_USE_TLS = True

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': ('%(asctime)s [%(process)d] [%(levelname)s] ' +
                       'pathname=%(pathname)s lineno=%(lineno)s ' +
                       'funcname=%(funcName)s %(message)s'),
            'datefmt': '%Y-%m-%d %H:%M:%S'
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        }
    },
    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'logging.NullHandler',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['console'],
            'level': 'ERROR',
        },
        'pimpmycause': {
            'handlers': ['console'],
            'level': 'INFO',
        }
    }
}
