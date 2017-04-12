function Trabajo (codigo, descripcion, prioridad){
	this.Trabajo (codigo, descripcion, prioridad);
};

Trabajo.prototype = {
	Trabajo: function (codigo, descripcion, prioridad){
		this.codigo = codigo;
		this.descripcion = descripcion;
		this.prioridad = prioridad;		
	},
	
}