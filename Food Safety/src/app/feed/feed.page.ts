import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage {
  noticias = [
    {
      titulo: 'Alimentação saudável: o que é, benefícios e como fazer (com dicas)',
      descricao: 'Uma nova receita de salada viralizou nas redes sociais por ser prática e deliciosa.',
      imagem: 'assets/images/materia1.webp',
      data: new Date('2025-05-01'),
      link: 'https://www.tuasaude.com/alimentacao-e-saude/'
    },
    {
      titulo: 'Reeducação alimentar: o que é, como fazer e cardápio',
      descricao: 'Especialistas ensinam como montar uma lista de compras inteligente e econômica.',
      imagem: 'assets/images/materia2.webp',
      data: new Date('2025-05-10'),
      link: 'https://www.tuasaude.com/emagrecer-com-reeducacao-alimentar/'
    },
     {
      titulo: '11 dicas imperdíveis para ter uma alimentação equilibrada',
      descricao: 'Dicas valiosas para manter uma alimentação equilibrada, enfatizando o consumo de alimentos naturais e a importância de uma dieta variada.',
      imagem: 'assets/images/materia3.jpeg',
      data: new Date('2024-10-17'),
      link: 'https://vidasaudavel.einstein.br/alimentacao-equilibrada/'
    },
    {
      titulo: 'Alimentação saudável',
      descricao: 'Este portal do Ministério da Saúde oferece orientações sobre alimentação saudável, destacando a importância de consumir alimentos in natura e minimamente processados.',
      imagem: 'assets/images/materia4.png',
      data: new Date('2010-05-02'),
      link: 'https://bvsms.saude.gov.br/alimentacao-saudavel/'
    },
    {
      titulo: 'Guardiões da natureza na luta pelo meio ambiente e pela garantia da segurança alimentar e nutricional',
      descricao: 'O documento afirma que estamos numa emergência planetária e que as crises inter-relacionadas de perda de biodiversidade, degradação da terra e mudança do clima, impulsionada pela produção insustentável e consumo, exigem urgente e imediata ação global.',
      imagem: 'assets/images/materia5.jpeg',
      data: new Date('2024-06-06'),
      link: 'https://www.gov.br/secretariageral/pt-br/noticias/2024/junho/guardioes-da-natureza-na-luta-pelo-meio-ambiente-e-pela-garantia-da-seguranca-alimentar-e-nutricional#:~:text=O%20documento%20afirma%20que%20estamos%20numa%20emerg%C3%AAncia,consumo%2C%20exigem%20urgente%20e%20imediata%20a%C3%A7%C3%A3o%20global.'
    },
    {
      titulo: 'Descubra o que é segurança alimentar e qual sua importância',
      descricao: 'Segurança alimentar é a garantia de todas as dimensões que inibem a ocorrência da fome. Disponibilidade e acesso permanente de alimentos, pleno consumo sob o ponto de vista nutricional e sustentabilidade em processos produtivos.',
      imagem: 'assets/images/materia6.png',
      data: new Date('2021-04-28'),
      link: 'https://www.oxfam.org.br/blog/descubra-o-que-e-seguranca-alimentar-e-qual-sua-importancia/#:~:text=Seguran%C3%A7a%20alimentar%20%C3%A9%20a%20garantia,com%20a%20realidade%20da%20fome.'
    },
    {
      titulo: 'Benefícios de seguir as Normas de Segurança Alimentar',
      descricao: 'Através de práticas corretas de higiene, como a lavagem adequada das mãos e utensílios, e o armazenamento correto dos alimentos, é possível evitar contaminações por bactérias, vírus e outros microorganismos prejudiciais à saúde.',
      imagem: 'assets/images/materia7.jpg',
      data: new Date('2023-07-27'),
      link: 'https://compareplanodesaude.com.br/empresarial/lei/normas-seguranca-alimentar/#:~:text=Atrav%C3%A9s%20de%20pr%C3%A1ticas%20corretas%20de%20higiene%2C%20como,v%C3%ADrus%20e%20outros%20microorganismos%20prejudiciais%20%C3%A0%20sa%C3%BAde.'
    },
    {
      titulo: 'Comer alimentos fora do prazo de validade: riscos para a saúde',
      descricao: 'Você já se perguntou se comer alimentos fora do prazo de validade pode trazer riscos à saúde? Entenda melhor sobre o assunto.',
      imagem: 'assets/images/materia8.avif',
      data: new Date('2024-08-02'),
      link: 'https://www.redehospitalcasa.com.br/post/comer-alimentos-fora-prazo-validade-riscos-saude#:~:text=A%20data%20de%20validade%20%C3%A9%20um%20indicador,micro%2Dorganismos%20patog%C3%AAnicos%2C%20como%20bact%C3%A9rias%2C%20fungos%20e%20v%C3%ADrus.'
    },
    {
      titulo: 'Boas Práticas para Serviços de Alimentação : Garantindo a Segurança e Qualidade dos Alimentos',
      descricao: 'Descubra os principais regulamentos, procedimentos essenciais e materiais necessários para a implementação das boas práticas em serviços de alimentação.',
      imagem: 'assets/images/materia9.png',
      data: new Date('2024-09-24'),
      link: 'https://www.alimentosonline.com.br/index.php?action=vqfrNqZNVXbpyq8rPMKcaM21qYwLVA&artigo_id=8941#:~:text=%2D%20Armazenamento%20Correto%20dos%20Alimentos:%20Alimentos%20perec%C3%ADveis,o%20controle%20rigoroso%20de%20geladeiras%20e%20congeladores.'
    },
    {
      titulo: 'Como economizar e ter uma alimentação adequada e saudável?',
      descricao: 'Dicas para manter uma alimentação saudável sem gastar muito, incluindo sugestões de compras e armazenamento de alimentos.',
      imagem: 'assets/images/materia10.png',
      data: new Date('2022-05-25'),
      link: 'https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2022/como-economizar-e-ter-uma-alimentacao-adequada-e-saudavel'
    }
  ];

  formatarData(data: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(data);
  }
}