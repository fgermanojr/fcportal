class Model < ApplicationRecord
  belongs_to :user
  has_many :builds, dependent: :destroy

  def self.verify(pwp)
    # verify model exists, else create it.
    @model = Model.find_by(modelname: pwp[:modelName])
    unless @model
      @model = @user.models.create(modelname: pwp[:modelName], description: '')
      @model.save!
    end
    @model
  end
end