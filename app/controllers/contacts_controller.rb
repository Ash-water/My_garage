class ContactsController < ApplicationController

  def index
  end

  def create

    @contact = Contact.new(contact_params)
    if @contact.save
    ContactMailer.contact_mail(@contact).deliver
    redirect_to root_path
    else
    render index
    end

  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
  
end
