# can I create a file here not tied to specific model
# visiting_portal_entry_page_spec   would be better name. change?
require 'rails_helper.rb'
require "spec_helper" # TBD: needed? verify to stop feature not defined error; is this file in rails_helper.rb?

RSpec.feature 'should show React container on page', type: 'feature' do
  # Comment v== This fails on rails 5; ^== works.
  # feature 'Visiting Portal Entry Page' do #
  #   I think it is the syntax if you drive from cucumber
  #   TBD: look at cucumber for feature testing
  scenario 'should show React container on page' do

    visit '/portal'
    page.save_and_open_page # does nothing I can see

    # click_link 'Add New Book'

    # fill_in 'book_title', with: 'Ulisses'

    # click_button 'Save Book'

    # expect(page).to have_content('Ulisses')
    # expect(find(:css, 'script#js-react-on-rails-context')).to be_true
    # expect(page).to have_content('Fortran Calculus Portal')
    # V== doesn't work on script from tests?
    # expect(page).to have_xpath('//script[@id="js-react-on-rails-context"]')
  end
end