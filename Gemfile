source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
ruby "2.3.5" # According to heroku site, if left off you will get this version.

gem 'rails', '~> 5.1.3'
gem 'react_on_rails', '~> 10.0.0' # upped from 9, seems to be working locally, fgj

# Use Redis adapter to run Action Cable in production, and locally
gem 'redis', '~> 3.0'
gem 'mini_racer' #shaka
gem 'jquery-rails' #shaka
gem 'bootstrap-sass' #shaka
gem 'resque-scheduler' # needed for resque in production

gem 'pg', '~> 0.18' # postgresql as the database for Active Record

gem 'puma', '~> 3.7' # app server

gem 'sass-rails', '~> 5.0' # SCSS for stylesheets
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '3.0.2', github: 'rails/webpacker'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
# gem 'coffee-rails', '~> 4.2' # remove lock?, reminder

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.0' # STUDY
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5' # STUDY

gem 'bcrypt', '~> 3.1.7' # Use ActiveModel has_secure_password
gem 'resque'
gem 'rubocop', require: false # Rubocop.

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug' # , platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'rspec-rails'
  gem 'database_cleaner'
  # gem 'shoulda-matchers' # reminder
  gem 'simplecov' # Code coverage.
  gem 'launchy' # so capybara save_and_open_page will open file
  # gem 'factory_girl_rails' # Turn this on soon.
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'selenium-webdriver' # Can drive chrome and firefox. Can be headless.
  # phantomjs is a headless web browser, uses Webit browser engine (safari)
  # runs from command line. Capybara - Poltergeist - PhantomJS
  gem 'poltergeist' # Headless browser.
end

group :test do


end

group :development do
  # Access an IRB console on exception pages or by using <%= console %>
  #  anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby] # We are ok
