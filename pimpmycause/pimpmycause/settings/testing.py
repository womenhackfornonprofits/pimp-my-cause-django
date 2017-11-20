from pimpmycause.settings import * # noqa

# TODO - create a testing app then we can
# comment this out
INSTALLED_APPS = INSTALLED_APPS + [
    'tests',
]

APP_DOMAIN = 'pimpmycause.test'
SECRET_KEY = get_env("SECRET_KEY", "todo")
