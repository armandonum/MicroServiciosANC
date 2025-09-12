require 'bundler/setup'
Bundler.require(:default)

require './db'
require './models/alumno'
require './swagger'

class App < Sinatra::Base
  helpers Sinatra::JSON
  register Sinatra::CrossOrigin

  configure do
    enable :cross_origin
    set :public_folder, File.dirname(__FILE__) + '/public'  # aquí pondrás el dist de swagger
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  options "*" do
    response.headers["Allow"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Accept, Authorization, Token"
    200
  end

  # 👉 JSON de Swagger
  get '/docs.json' do
    Swagger::Blocks.build_root_json([SwaggerRoot]).to_json
  end

  # 👉 Swagger UI directo en /docs
  get '/docs' do
    send_file File.join(settings.public_folder, 'index.html')
  end

  # ------------------ CRUD Alumnos ------------------

  # Listar alumnos
  get '/alumnos' do
    json Alumno.all
  end

  # Obtener alumno por ID
  get '/alumnos/:id' do
    alumno = Alumno.find_by(id: params[:id])
    if alumno
      json alumno
    else
      halt 404, json({ error: 'Alumno no encontrado' })
    end
  end

  # Crear alumno
  post '/alumnos' do
    data = JSON.parse(request.body.read)
    alumno = Alumno.create(data)
    status 201
    json alumno
  end

  # Actualizar alumno
  put '/alumnos/:id' do
    alumno = Alumno.find_by(id: params[:id])
    if alumno
      data = JSON.parse(request.body.read)
      alumno.update(data)
      json alumno
    else
      halt 404, json({ error: 'Alumno no encontrado' })
    end
  end

  # Eliminar alumno
  delete '/alumnos/:id' do
    alumno = Alumno.find_by(id: params[:id])
    if alumno
      alumno.destroy
      status 204
    else
      halt 404, json({ error: 'Alumno no encontrado' })
    end
  end

  run! if app_file == $0
end
