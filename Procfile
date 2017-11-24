web: bundle exec rails server
worker: bundle exec rake jobs:work
resque: env TERM_CHILD=1 QUEUE=* bundle exec rake resque:work
