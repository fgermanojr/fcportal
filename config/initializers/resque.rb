Resque.logger.formatter = Resque::VeryVerboseFormatter.new

# if Rails.env.production?  # TBD: remove
#   uri = URI.parse ENV["REDISCLOUD_URL"]
#   Resque.redis = Redis.new(host: uri.host, port: uri.port,
#                            password: uri.password)
# else
#   Resque.redis = "localhost:6379"
# end

Resque.redis = Rails.env.production? ? $redis : 'localhost:6379'