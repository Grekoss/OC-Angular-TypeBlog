import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet. Accusamus adipisci aliquam asperiores cum error fugiat necessitatibus nihil quam.',
      loveIts: -1,
      createdAt: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: 'Error esse fugiat iste rem soluta tenetur veniam voluptatem! Eum, maxime, rem. Architecto excepturi iusto nemo quos.',
      loveIts: 0,
      createdAt: new Date(),
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea earum mollitia repellendus.',
      loveIts: 4,
      createdAt: new Date(),
    },
    {
      title: 'Mon quatrième post',
      content: 'Lorem vide ;)',
      loveIts: 1,
      createdAt: new Date(),
    }
  ];
}
