# swagger.rb
require 'swagger/blocks'

class SwaggerRoot
  include Swagger::Blocks

  # Información general de la API
  swagger_root do
    key :swagger, '2.0'
    info do
      key :version, '1.0.0'
      key :title, 'API REST Alumnos'
      key :description, 'CRUD de alumnos en MySQL'
    end
    key :host, 'localhost:4567'
    key :basePath, '/'
    key :consumes, ['application/json']
    key :produces, ['application/json']
  end

  # Esquema Alumno
  swagger_schema :Alumno do
    key :required, [:id, :nombre, :apellido]

    property :id do
      key :type, :integer
      key :example, 1
    end

    property :nombre do
      key :type, :string
      key :example, 'Juan'
    end

    property :apellido do
      key :type, :string
      key :example, 'Pérez'
    end
  end


  # GET /alumnos
  swagger_path '/alumnos' do
    operation :get do
      key :description, 'Obtiene todos los alumnos'
      key :operationId, 'getAlumnos'
      key :produces, ['application/json']
      key :tags, ['Alumno']

      response 200 do
        key :description, 'Lista de alumnos'
        schema type: :array do
          items do
            key :'$ref', :Alumno
          end
        end
      end
    end
  end

  # GET /alumnos/{id}
  swagger_path '/alumnos/{id}' do
    operation :get do
      key :description, 'Obtiene un alumno por ID'
      key :operationId, 'getAlumnoById'
      key :produces, ['application/json']
      key :tags, ['Alumno']

      parameter name: :id do
        key :in, :path
        key :description, 'ID del alumno'
        key :required, true
        key :type, :integer
        key :format, :int64
      end

      response 200 do
        key :description, 'Alumno encontrado'
        schema do
          key :'$ref', :Alumno
        end
      end
      response 404 do
        key :description, 'Alumno no encontrado'
      end
    end
  end

  # POST /alumnos
  swagger_path '/alumnos' do
    operation :post do
      key :description, 'Crea un nuevo alumno'
      key :operationId, 'createAlumno'
      key :produces, ['application/json']
      key :tags, ['Alumno']

      parameter name: :alumno do
        key :in, :body
        key :description, 'Alumno a crear'
        key :required, true
        schema do
          key :'$ref', :Alumno
        end
      end

      response 201 do
        key :description, 'Alumno creado'
        schema do
          key :'$ref', :Alumno
        end
      end
    end
  end

  # PUT /alumnos/{id}
  swagger_path '/alumnos/{id}' do
    operation :put do
      key :description, 'Actualiza un alumno existente'
      key :operationId, 'updateAlumno'
      key :produces, ['application/json']
      key :tags, ['Alumno']

      parameter name: :id do
        key :in, :path
        key :description, 'ID del alumno'
        key :required, true
        key :type, :integer
      end

      parameter name: :alumno do
        key :in, :body
        key :description, 'Datos del alumno a actualizar'
        key :required, true
        schema do
          key :'$ref', :Alumno
        end
      end

      response 200 do
        key :description, 'Alumno actualizado'
        schema do
          key :'$ref', :Alumno
        end
      end
      response 404 do
        key :description, 'Alumno no encontrado'
      end
    end
  end

  # DELETE /alumnos/{id}
  swagger_path '/alumnos/{id}' do
    operation :delete do
      key :description, 'Elimina un alumno'
      key :operationId, 'deleteAlumno'
      key :produces, ['application/json']
      key :tags, ['Alumno']

      parameter name: :id do
        key :in, :path
        key :description, 'ID del alumno'
        key :required, true
        key :type, :integer
      end

      response 204 do
        key :description, 'Alumno eliminado'
      end
      response 404 do
        key :description, 'Alumno no encontrado'
      end
    end
  end
end
