require 'resque/tasks'
task 'resque:setup' => :environment

# Resque.after_fork = Proc.new { ActiveRecord::Base.establish_connection }
 #this is necessary for production environments, otherwise your background jobs
 #will start to fail when hit from many different connections.

# task 'resque:setup' => :environment

# # ???
# desc "Alias for resque:work (To run workers on Heroku)"
# task "jobs:work" => "resque:work"