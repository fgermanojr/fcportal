require 'resque/tasks'
task 'resque:setup' => :environment

# I think this let's the fork access the database
Resque.after_fork = Proc.new { ActiveRecord::Base.establish_connection }
 #this is necessary for production environments, otherwise your background jobs
 #will start to fail when hit from many different connections.

desc "Alias for resque:work (To run workers on Heroku)"
task "jobs:work" => "resque:work"