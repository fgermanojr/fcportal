require_relative 'boot'

require 'rails/all'
require 'sprockets/railtie' # asset pipeline uses; my app was working
#  but application css not found when trying to set up results server.

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FortranCalculusPortalReact
  class Application < Rails::Application


    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    Rails.application.config.assets.precompile += [ 'manifest.js' ] # fgj, not getting helper tags application

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.active_job.queue_adapter = :resque
  end
end
