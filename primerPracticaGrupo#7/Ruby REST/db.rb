require "active_record"

begin
  ActiveRecord::Base.establish_connection(
    adapter:  "mysql2",
    host:     "127.0.0.1",    # usar 127.0.0.1 evita problemas de socket
    username: "root",
    password: "",
    database: "restRubyDB",
    port:     3307
  )

  # Intentar una consulta simple para verificar conexión
  ActiveRecord::Base.connection
  puts "✅ Conexión a MySQL establecida correctamente."

rescue ActiveRecord::NoDatabaseError => e
  puts "❌ Base de datos no encontrada: #{e.message}"
  exit
rescue ActiveRecord::ConnectionNotEstablished => e
  puts "❌ No se pudo establecer la conexión: #{e.message}"
  exit
rescue Mysql2::Error => e
  puts "❌ Error MySQL: #{e.message}"
  exit
end
