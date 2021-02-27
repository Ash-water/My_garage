class BlogsController < ApplicationController
  before_action :basic_auth, only: [:new, :edit, :destroy]
  before_action :set_blog, only: [:edit, :show]

  def index
    @blogs = Blog.all
  end
  
  def new
    @blog = Blog.new
  end

  def create
    Blog.create(blog_params)
  end

  def edit
  end

  def update
  blog = Blog.find(params[:id])
  blog.update(blog_params)
  end

  def show
  end

  def destroy
    blog = Blog.find(params[:id])
    blog.destroy
  end
  

  private
  def blog_params
    params.require(:blog).permit(:title, :image, :content)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
    end
  end

end
