import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Inicio {
	public static void main(String[] args) {
		
		String maior = "Meu número é maior que esse.";
		String menor = "Meu número é menor que esse.";
		int tentativa;
		
		//=====================================================================================================

		System.out.println("\n===================BEM-VINDO(A) AO JOGO DE ADIVINHAÇÃO!===================\n");
		System.out.println("====> Autora da demonstração: Beatriz Nataly\n");
		System.out.println("====> GitHub: @Natyce\n");

		Scanner entrada = new Scanner(System.in);
		
		System.out.print("\n====> Digite o nome do seu personagem: ");
		String nome = entrada.next();

		System.out.println("\nOlá " + nome + "! Vamos jogar um jogo de adivinhação,"
				+ " é bem simples, eu vou pensar em um número de 0 a 100 e você precisa adivinhar."
				+ "\nVou te dar 10 tentativas. Se elas acabarem eu venço, senão, você está livre para ir..."
				+ " Tudo pronto?");
		System.out.println("\n===> Digite sua resposta: ");
		String resposta = entrada.next();
		resposta = "Haha, independente da sua resposta";
		System.out.printf("%s %s... Eu ia começar o jogo de qualquer modo, espero que se divirta!\n", resposta, nome);
		//=====================================================================================================
		
		Random number = new Random();

		int random = number.nextInt(100);
		
		ArrayList<String> frases = new ArrayList();
		frases.add("Ops! número errado... ");
		frases.add("Uh oh... Tente de novo... ");
		frases.add("Ah opa OPA! ... Ah não, esquece... ");
		frases.add(" Vamos lá, eu sei que você faz melhor que isso.");
		frases.add("... Isso está começando a ficar chato... ");
		frases.add("É sério... ");
		frases.add("Parece que não... ");
		frases.add(" O tempo está acabando, parece que vou ganhar haha...");
		frases.add("Oh oh, última chance... ");
		frases.add("... Parece que suas tentativas acabaram. De fato, meu número era ");
		
		for(int i=0; i<10; i++) {
			System.out.println("\nAdivinhe meu número: \n"); {
				System.out.println("Você tem " + (10 - i) + " tentativa(s)");
				tentativa=entrada.nextInt();
				
				if(i == 9) {
					System.out.printf("%s %d ...", frases.get(9), random);
					System.out.println(" Mas hey... Este projeto era apenas uma demonstração, eu ainda quero aparecer em um jogo completo para");
					System.out.println("nos divertirmos mais... Este jogo foi desenvolvido pela Beatriz Nataly --> @Natyce, obrigada por jogar!");
					System.out.println("\n=============================================\n");
					System.out.println("\n FIM DE JOGO! VOCÊ PERDEU! \n");
				} else if(tentativa > random) {
					System.out.printf("%s %s", frases.get(i), menor);
				} else if(tentativa < random) {
					System.out.printf("%s %s", frases.get(i), maior);
				} else if(tentativa == random) {
					System.out.println("... Oh... Parece que você realmente acertou, eu perdi... É uma pena, mas hey...");
					System.out.println("Este projeto era apenas uma demonstração, eu ainda quero aparecer em um jogo completo para");
					System.out.println("nos divertirmos mais... Este jogo foi desenvolvido pela Beatriz Nataly --> @Natyce, obrigada por jogar!");
					System.out.println("\n=============================================\n");
					System.out.println("\n FIM DE JOGO! VOCÊ VENCEU! \n");
					i = 10;
				}
			}
		}
		
		entrada.close();
	}
}
