"""
Django settings for pimpmycause project.

"""
import os, glob, sys
from env_utils import (
    get_env,
)

from core.utils import generate_upload_destination_path


import glob
from pathlib import Path

def _find_apt_root():
    p = Path(__file__).resolve()
    for parent in p.parents:
        d = parent / ".apt"
        if d.is_dir():
            return d
    d = Path("/app/.apt")
    if d.is_dir():
        return d
    d = Path("/app/.heroku-geo-buildpack/vendor")
    return d if d.is_dir() else None

def _resolve_lib(env_name: str, name_glob: str):
    p = os.getenv(env_name)
    if p and os.path.exists(p):
        return p
    apt_root = _find_apt_root()
    if apt_root:
        hits = sorted(glob.glob(str(apt_root / f"usr/lib/x86_64-linux-gnu/{name_glob}")))
        if not hits:
            hits = sorted(glob.glob(str(apt_root / f"lib/{name_glob}")))
        if not hits:
            hits = sorted(glob.glob(str(apt_root / f"**/{name_glob}"), recursive=True))
        if hits:
            os.environ[env_name] = hits[-1]
            return hits[-1]
    return None

GDAL_LIBRARY_PATH = _resolve_lib("GDAL_LIBRARY_PATH", "libgdal.so.*")
GEOS_LIBRARY_PATH = _resolve_lib("GEOS_LIBRARY_PATH", "libgeos_c.so.*")

is_heroku = os.getenv("DYNO") is not None
is_local = not is_heroku and os.path.exists("/opt/homebrew/Cellar")

if not GDAL_LIBRARY_PATH and is_local:
    GDAL_LIBRARY_PATH = "/opt/homebrew/Cellar/gdal/3.11.4_1/lib/libgdal.37.3.11.4.dylib"
if not GEOS_LIBRARY_PATH and is_local:
    GEOS_LIBRARY_PATH = "/opt/homebrew/Cellar/geos/3.14.0/lib/libgeos_c.1.20.4.dylib"

if not os.environ.get("GDAL_DATA") and is_local:
    os.environ["GDAL_DATA"] = "/opt/homebrew/Cellar/gdal/3.11.4_1/share/gdal"

if GDAL_LIBRARY_PATH:
    os.environ["GDAL_LIBRARY_PATH"] = GDAL_LIBRARY_PATH
if GEOS_LIBRARY_PATH:
    os.environ["GEOS_LIBRARY_PATH"] = GEOS_LIBRARY_PATH

if is_heroku and not GDAL_LIBRARY_PATH:
    gdal_path = "/app/.heroku-geo-buildpack/vendor/lib/libgdal.so"
    if os.path.exists(gdal_path):
        GDAL_LIBRARY_PATH = gdal_path
        os.environ["GDAL_LIBRARY_PATH"] = gdal_path
if is_heroku and not GEOS_LIBRARY_PATH:
    geos_path = "/app/.heroku-geo-buildpack/vendor/lib/libgeos_c.so"
    if os.path.exists(geos_path):
        GEOS_LIBRARY_PATH = geos_path
        os.environ["GEOS_LIBRARY_PATH"] = geos_path


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


DEBUG = True
LOAD_ENV_FILE = False

GIS_APPS = []
if GDAL_LIBRARY_PATH and GEOS_LIBRARY_PATH:
    GIS_APPS = ['django.contrib.gis', 'mapwidgets']

INSTALLED_APPS = [
    'registration',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',
    'django.contrib.redirects',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
] + GIS_APPS + [
    's3direct',
    'django_countries',
    'custom_user',
    'widget_tweaks',
    'django_filters',
    'tinymce',
    'storages',
    'webpack_loader',
    # pimpmycause imports
    'core',
    'profiles',
    'adverts',
    'news',
    'pimpuser_messages'

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.BrokenLinkEmailsMiddleware',
    'django.contrib.redirects.middleware.RedirectFallbackMiddleware',
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
                'pimpmycause.context_processors.unread_messages_number',
            ],
        },
    },
]


WSGI_APPLICATION = 'pimpmycause.wsgi.application'
SITE_ID = 1

if GDAL_LIBRARY_PATH and GEOS_LIBRARY_PATH:
    DATABASE_ENGINE = 'django.contrib.gis.db.backends.postgis'
else:
    DATABASE_ENGINE = 'django.db.backends.postgresql'

DATABASES = {
    'default': {
        'ENGINE': DATABASE_ENGINE,
        'NAME': 'pimpmycause',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}


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


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = 'profiles.PimpUser'

STATICFILES_STORAGE = 'whitenoise.storage.StaticFilesStorage'

STATIC_URL = '/staticfiles/'

STATIC_ROOT = os.path.join(BASE_DIR, 'pimpmycause/staticfiles')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static-bundles'),
)

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

ACCOUNT_ACTIVATION_DAYS = 7
REGISTRATION_DEFAULT_FROM_EMAIL = get_env("DEFAULT_FROM_EMAIL", "webmaster@pimpmycause.org")
REGISTRATION_EMAIL_HTML = True
REGISTRATION_AUTO_LOGIN = True


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'localhost'
EMAIL_PORT = 1025
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
DEFAULT_FROM_EMAIL = get_env('DEFAULT_FROM_EMAIL', 'webmaster@pimpmycause.org"')

AWS_ACCESS_KEY_ID = get_env("AWS_ACCESS_KEY_ID", 'todo')
AWS_SECRET_ACCESS_KEY = get_env("AWS_SECRET_ACCESS_KEY", 'todo')
AWS_STORAGE_BUCKET_NAME = get_env("AWS_STORAGE_BUCKET_NAME", 'todo')

AWS_S3_REGION_NAME = get_env("AWS_STORAGE_REGION", 'todo')
AWS_S3_ENDPOINT_URL = 'https://s3.%s.amazonaws.com' % AWS_S3_REGION_NAME

S3DIRECT_DESTINATIONS = {
    'user-profile-images': {
        'key': generate_upload_destination_path(
            'uploads/images/user-profile-images'
        ),
        'allowed': ['image/jpeg', 'image/png', 'image/jpg'],
        'cache_control': 'max-age=2592000',
        'content_length_range': (0, 20000000),
    },
    'news-post-images': {
        'key': generate_upload_destination_path(
            'uploads/images/news'
        ),
        'allowed': ['image/jpeg', 'image/png', 'image/jpg'],
        'cache_control': 'max-age=2592000',
        'content_length_range': (0, 20000000),
    },
    'team-member-images': {
        'key': generate_upload_destination_path(
            'uploads/images/team-member-images'
        ),
        'allowed': ['image/jpeg', 'image/png', 'image/jpg'],
        'cache_control': 'max-age=2592000',
        'content_length_range': (0, 20000000),
    },
}

LOGIN_REDIRECT_URL = '/profile/edit'

TINYMCE_JS_URL = os.path.join(STATIC_URL, "tinymce/tinymce.min.js")
TINYMCE_COMPRESSOR = False

TINYMCE_DEFAULT_CONFIG = {
    'plugins': "table,spellchecker,paste,searchreplace,media,link",
    'theme': "silver",
    'cleanup_on_startup': True,
    'custom_undo_redo_levels': 10,
    'paste_as_text': True,
    "width": "960px",
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

#MAP_WIDGETS = {
#    "GoogleMapPointFieldWidget": (
#        ("zoom", 15),
#        ("mapCenterLocationName", 'London'),
#    ),
#    "GOOGLE_MAP_API_KEY": get_env("GOOGLE_MAP_API_KEY", 'todo')
#}

LANGUAGE_CODE = 'en-gb'

TIME_ZONE = 'UTC'

USE_I18N = False

USE_L10N = True

USE_TZ = True