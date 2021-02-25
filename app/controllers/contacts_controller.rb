class ContactsController < ApplicationController

  def index
  end

  def create
    Contact.create(contact_params)
    redirect_to root_path
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
