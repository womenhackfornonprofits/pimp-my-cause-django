# Pimp My Cause [Django]

## Requirements
- **Python 3.11** (matches Heroku production environment)
- PostgreSQL with PostGIS extension
- Node.js and npm for frontend build (Note: Current setup has compatibility issues with newer Node.js versions)

## Virtual Environment Setup
This allows you to install all the Python dependencies in a "box" so they are not globally installed and clashing with other projects.

### Option 1: Using venv (Recommended)
1. Create a virtual environment with Python 3.11:
	`python3.11 -m venv venv`
	*If you don't have Python 3.11, install it first: `brew install python@3.11`*
2. Activate the virtual environment:
	`source venv/bin/activate`
3. Verify Python version:
	`python --version` (should show Python 3.11.x)
4. Upgrade pip:
	`pip install --upgrade pip`

### Option 2: Using virtualenvwrapper
1. Install [virtualenv](https://virtualenv.pypa.io/en/stable/):
	`pip install virtualenv`
2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html):
	`pip install virtualenvwrapper`
3. Source the `virtualenvwrapper`:
	`source /usr/local/bin/virtualenvwrapper.sh`
4. Create a new env for the project:
	 `mkvirtualenv pimp`


## Clone the repo
1. Get the code:
	`git clone git@github.com:womenhackfornonprofits/pimp-my-cause-django.git`

## Install Python dependencies
1. Go inside the `pimp-my-cause-django` directory:
	`cd pimp-my-cause-django`
2. Activate the virtual environment:
	 `source venv/bin/activate` (if using venv)
	 OR `workon pimp` (if using virtualenvwrapper)
3. Install the requirements:
	 `pip install -r requirements.txt`
	 This will get all the Python dependencies.

**Note**: All packages have been updated for Django 3.2+ compatibility. Key updates include:
- django-countries (7.6.1)
- django-registration-redux (2.13)
- django-filter (22.1)
- whitenoise (6.6.0)
- boto3 (1.34.0) - updated from boto2

## Database
1. You will need to have [Postgres installed](https://www.postgresql.org/download/) and up and running. You can install it via:
	- Homebrew `brew install postgresql`
	- OR download the [Postgres App](http://postgresapp.com/)
2. Make sure the Postgres Server is up and running:
	- If using the App simply start the server from there
	- If using command line: `brew services start postgresql`
3. Create a database locally for the project to run:
	`createdb pimpmycause`

## GEO Spatial dependencies
This is used to allow us to store Spatial data about user locations and calculate distance between users.
1. Install all the Geo Django dependencies using [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle)
	`brew bundle`
	If you can't use Homebrew, you can install the dependencies mentioned in the Brewfile manually. [Django GIS Instructions](https://docs.djangoproject.com/en/1.11/ref/contrib/gis/install/#macos)

## Front-end dependencies
**Note**: The frontend has been modernized to work with Node.js 20. The project now uses modern build tools.

### Install Node.js dependencies
1. The project includes `.nvmrc` files to automatically use Node.js 20
2. Install and use Node.js 20:
	`nvm use` (automatically uses version from .nvmrc)
	OR manually: `nvm install 20 && nvm use 20`
3. Install front-end dependencies:
	`cd pimpmycause`
	`npm install`
4. Build assets:
	`npm run build` (production) or `npm run watch` (development)


## Django 3.2+ Compatibility
This project has been updated for Django 3.2+ compatibility. Key changes include:
- Removed `python_2_unicode_compatible` decorators from all models
- Updated imports to use Django 3.2+ compatible functions
- Added `DEFAULT_AUTO_FIELD` setting for primary keys
- Updated all third-party packages to compatible versions
- Migrated from boto2 to boto3 for AWS integration

## Running the project locally
1. Go inside the django app directory:
	`cd pimpmycause`
2. Activate the virtual environment:
	`source ../venv/bin/activate` (if using venv)
	OR `workon pimp` (if using virtualenvwrapper)
3. Run database migrations:
	`python manage.py migrate`
4. Run django server:
	`python manage.py runserver`
5. Go to [127.0.0.1:8000](http://127.0.0.1:8000/)

## Front End changes
1. Make css and javascript changes in the `src` folder
2. Make any HTML changes in the Django templates located in `pimpmycause/templates`
3. Use the modernized build system with Node.js 20:
   - `npm run watch` to run webpack and watch for changes (development)
   - `npm run build` to create production assets
4. You will have to reload the [127.0.0.1:8000](http://127.0.0.1:8000/) link after adding changes

## Current Setup Status

### ✅ Completed
- Python virtual environment created and activated
- Python dependencies installed successfully
- Node.js 20 installed and configured (as requested)
- Frontend dependencies modernized to work with Node.js 20
- Webpack 5 configuration updated
- Modern build system working (sass, webpack 5, babel 7)
- Static files built successfully with modern toolchain

### ⚠️ Known Issues
- **Geospatial Dependencies**: GDAL and other geospatial libraries are not installed, causing Django to fail on startup. Requires Xcode license agreement for Homebrew bundle installation
- **Django Startup**: Currently fails due to missing GDAL library for geospatial features
- **Sass Deprecation Warnings**: The project uses old Foundation CSS framework with deprecated Sass syntax (warnings are non-breaking)

### 🔧 Recommended Workarounds
1. **For frontend development**: Use Node.js 20 with the modernized build system: `npm run watch` for development
2. **For geospatial features**: Ensure Xcode license is accepted: `sudo xcodebuild -license accept`
3. **For production builds**: Use `npm run build` to create optimized assets

## Troubleshooting

### Django fails to start with GDAL error
**Error**: `Could not find the GDAL library`
**Solution**: Install geospatial dependencies:
```bash
# Accept Xcode license (required for Homebrew)
sudo xcodebuild -license accept

# Install geospatial dependencies
brew bundle

# If brew bundle fails, install manually:
brew install gdal postgis geoip libgeoip
```

### Frontend build issues
**Error**: Build failures or missing assets
**Solution**: The frontend has been modernized to work with Node.js 20:
```bash
# Use Node.js 20 (current default)
nvm use 20
cd pimpmycause

# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Watch for development
npm run watch
```

### Virtual environment issues
**Error**: Python version mismatch
**Solution**: Ensure you're using Python 3.11:
```bash
# Create virtual environment with correct Python version
python3.11 -m venv venv
source venv/bin/activate
python --version  # Should show Python 3.11.x
```

## Deploying to Heroku
1. Create a Heroku Account
2. Get added to the app in the Heroku Dashboard (ask a team member)
3. In the terminal `heroku login`
4. Within your project directory `heroku git:remote -a staging-pimpmycause`

### Heroku Configuration
The app uses geospatial libraries and requires specific buildpacks:
- **Geospatial buildpack**: Automatically installs GDAL, GEOS, and PROJ libraries
- **Python buildpack**: Installs Python dependencies

### Required Environment Variables
Set these in Heroku before deploying:
```bash
heroku config:set AWS_ACCESS_KEY_ID=your_access_key
heroku config:set AWS_SECRET_ACCESS_KEY=your_secret_key
heroku config:set AWS_STORAGE_BUCKET_NAME=your_bucket_name
heroku config:set AWS_STORAGE_REGION=eu-west-2
heroku config:unset DISABLE_COLLECTSTATIC  # Enable static file collection
```

### Deploy
1. Make sure you have committed all changes and `git status` is clean
2. Deploy: `git push heroku master`
3. Go to [https://staging-pimpmycause.herokuapp.com](https://staging-pimpmycause.herokuapp.com/) to view the live site
