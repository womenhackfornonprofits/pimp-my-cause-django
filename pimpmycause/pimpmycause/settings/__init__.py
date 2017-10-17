"""
Django settings for pimpmycause project.

"""
import os
from env_utils import (
    get_env,
    get_list,
)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Application definition

INSTALLED_APPS = [
    'registration',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    's3direct',
    'django_countries',
    'custom_user',
    'widget_tweaks',
    'django_filters',
    'tinymce',
    'webpack_loader',
    # pimpmycause imports
    'core',
    'profiles',
    'adverts',
    'news'

]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

]

ROOT_URLCONF = 'pimpmycause.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': (
            os.path.join(BASE_DIR, 'pimpmycause/templates'),
        ),
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'pimpmycause.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'pimpmycause',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}


########
# Auth #
########

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = 'profiles.PimpUser'

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/
#

STATIC_URL = '/staticfiles/'

STATIC_ROOT = os.path.join(BASE_DIR, 'pimpmycause/staticfiles')

LOGIN_REDIRECT_URL = '/profile/edit'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

CONTEXT_PROCESSORS = [
    "django.contrib.auth.context_processors.auth",
    "django.template.context_processors.debug",
    "django.template.context_processors.i18n",
    "django.template.context_processors.media",
    "django.template.context_processors.static",
    "django.template.context_processors.tz",
    "django.contrib.messages.context_processors.messages",
    "django.core.context_processors.request",
]

# Registration settings
ACCOUNT_ACTIVATION_DAYS = 7
REGISTRATION_DEFAULT_FROM_EMAIL = get_env("DEFAULT_FROM_EMAIL", "info@pimpmycause.org")
REGISTRATION_EMAIL_HTML = True
REGISTRATION_AUTO_LOGIN = True


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'localhost'
EMAIL_PORT = 1025
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
DEFAULT_FROM_EMAIL = get_env('DEFAULT_FROM_EMAIL', 'webmaster@localhost')


# User image uploads to S3 bucket
AWS_STORAGE_BUCKET_NAME = get_env("AWS_BUCKET_NAME", "pimpmycause-images")
S3DIRECT_REGION = get_env("AWS_BUCKET_NAME", 'eu-west-1')

S3DIRECT_DESTINATIONS = {
    'user-profile-images': {
        'key': 'uploads/imgs',
        'allowed': ['image/jpeg', 'image/png', 'image/jpg'],
        'cache_control': 'max-age=2592000',
    },
    'news-post-images': {
        'key': 'uploads/imgs',
        'allowed': ['image/jpeg', 'image/png', 'image/jpg'],
        'cache_control': 'max-age=2592000',
    }
}

TINYMCE_DEFAULT_CONFIG = {
    'plugins': "table,spellchecker,paste,searchreplace",
    'theme': "advanced",
    'cleanup_on_startup': True,
    'custom_undo_redo_levels': 10,
    'paste_as_text': True,
    'width': '100%',
    'height': 500
}
TINYMCE_SPELLCHECKER = True

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}

########
# i18n #
########

LANGUAGE_CODE = 'en-gb'

TIME_ZONE = 'UTC'

USE_I18N = False

USE_L10N = True

USE_TZ = True
