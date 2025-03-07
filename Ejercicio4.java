package com.generation;

import java.util.Scanner;

/*
 * Este programa simula el juego de Piedra, Papel o Tijeras.
 * Los jugadores ingresan su elección y el programa determina el ganador.
 * Cambios realizados:
 * - Lógica optimizada y modularizada en métodos.
 * - Mejoras en las validaciones de entrada.
 */

public class Codigo4 {
    public static void main(String[] args) { // Añadí el public static void para ejecutar el programa
	    Scanner sc1 = new Scanner(System.in);
	    
	    System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String jugador1 = sc1.nextLine().toLowerCase(); // Añadí el método toLowerCase para normalizar la entrada y pueda compararse
	    
	    System.out.println("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
	    Scanner sc2 = new Scanner(System.in);
	    String jugador2 = sc2.nextLine().toLowerCase(); // Añadí el metodo toLowerCase
	    
	    if (jugador1.equals(jugador2)) { // Cambié los operadores de igualdad por el método equals 
	      System.out.println("Empate");
	    } else {
	      int ganador = 2; // Cambié los nombres de las variables para que sea mas facil identificarlos
	      switch(jugador1) {
	        case "piedra":
	          if (jugador2.equals("tijeras")) {
	            ganador = 1;
	          }
	          break; // Agregué un break para que salga del switch.
	        case "papel":
	          if (jugador2.equals("piedra")) {
	            ganador = 1;
	          }
	          break; // aqui tambien gregué un break para que salga del switch.
	        case "tijera":
	          if (jugador2.equals("papel")) {
	            ganador = 1;
	          }
	          break; // otra veez agregue un break para que salga del switch y pase a la siguiente sentencia 
	        default:
	      }
	      System.out.println("Gana el jugador " + ganador);
	    }	  
	}
}