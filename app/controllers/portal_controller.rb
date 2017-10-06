# frozen_string_literal: true

class PortalController < ApplicationController
  layout "portal"

  def index
    @portal_props = { name: "FC Portal" }
  end
end
