function obtenerVoltaje() { 
		r = document.getElementById("resistencia_vri").value; 
		i = document.getElementById("corriente_vri").value; 
		v = r * i; 
		document.getElementById("voltaje_vri").value = v; 
	};

	function obtenerCorriente() {
		v = document.getElementById("voltaje_ivr").value;
		r = document.getElementById("resistencia_ivr").value;
		i = v / r;
		document.getElementById("corriente_ivr").value = i;
	};

	function obtenerResistencia() {
		v = document.getElementById("voltaje_rvi").value;
		i = document.getElementById("corriente_rvi").value;
		r = v / i;
		document.getElementById("resistencia_rvi").value = r;
	};