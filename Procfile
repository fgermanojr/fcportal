web: bundle exec rails server
worker: env RESQUE_TERM_TIMEOUT=1 TERM_CHILD=1 VVERBOSE=1 QUEUE=* bundle exec rake resque:work
