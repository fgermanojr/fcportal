require 'resque/tasks'
require 'resque/scheduler/tasks'
task 'resque:setup': :environment do
  Resque.after_fork = Proc.new { ActiveRecord::Base.establish_connection }
  Resque.before_fork = Proc.new { ActiveRecord::Base.connectoin.disconnect }
end
 #this is necessary for production environments, otherwise your background jobs
 #will start to fail when hit from many different connections.

desc "Alias for resque:work (To run workers on Heroku)"
task "jobs:work" => "resque:work"