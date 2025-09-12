require "active_record"

class Alumno < ActiveRecord::Base
  self.table_name = "alumnos"
end
