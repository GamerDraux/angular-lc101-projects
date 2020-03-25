import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photos';
  image1 = 'https://previews.dropbox.com/p/thumb/AAspCVZH6o-MFAOKpq-JnOyWqgXGQPfCHW1EDdUycds3GkzrjGvpotAhaZkVTI8yGsax9oduHUilV2-SmnamtmO3y_AR9U6OieTYtJ7abZYRMZsusBKA1qUYK5W49ZTrnC-mOdNKnicyz-FZDS7PwsaQJaUjm3X4n00nCFy0sIB6dKpUDAK2p687IXvjLdwlQ3aROZLMy3HPM-51cAGeO6X4C8D6icRXQGNw0C9Y-E_rVZxfJbeAk7SzQtkxyUkjlf6SJjb6MOQi7Fupj-RSY8Omnk6mQHwruyUhLijM4OWyvGLFrGWsEnZc3eJ6c4QxV_vaTPxRS4RoFV2SuetFjmOkDakmHX5pp9sh-MMYcmT8X72ArwuKGcCw6zbbuivPJxv60v8HFMLcmcalfRyXhvKn/p.jpeg?size=800x600&size_mode=3';
  image2 = 'https://previews.dropbox.com/p/thumb/AAtv-Wn8lh9YBuZFt_o1DaUeWy_2_fexErRWJQw92lNyQ9AFNZ9ou1oKh78wUq1TELq2s4FHyogq-LQ-ZMkXZIzA02LvVYKbKtQlPnlKZdBmSVtFs8Kr_fmbtCZq_cduLm5idUBv95RUH7PXHWmyDGIiudh7873X7BQ6FUPAX47wfZRPrxBp1jaur5JTnbtibMRktXJV8ZaKS7C2ckQVQxhMIvfESn3Tyxjbr3bfDjYeu4i-7p8tHPg5m_894XudIM9Hy-SBFE9idh8nvq1PQ4BbGgQT82-mlc1ZnMxOo91PzFEgAZvqnJiH6q2rxTI57NSaVuniYcUCO3vQ5rJ2oKoB/p.jpeg?size=800x600&size_mode=3';
  image3 = 'https://previews.dropbox.com/p/thumb/AAspnXWdQtcLHyGvgdkejnwUvlZSyUX9ewNPNGJEh2PYJVeEJ6LWxKJ69mJgXpKAOQ80GCPCWtHjNC7-VAvD0obExp9AIX2Wj8AyGIUeoPygt4gwk5v30dY72Ng_TbE7PfiU_6iGW1Cabs8YOK8580twWUuSiFztkNxakLIr2PIiJ52ipXnRW6Lcbge7c04LuvJyj3ZtHE47ZLkvAz7DoR91vkaOuXYOIgKxLMZmd2Z8a7ZOXXSxNYBWrkst9exlF_ldOlGOtG13KCEkm-YKo7K3h4MFbvBtaa-j7A9azFrIb1i1FWziQj1kAaTWN-By-BPNQHK7dwzjP6WpZmV84_2bwvnZGHog1jAQXoUZsMSfUJOV0JwtNgxmKiLvuchALr-rX1DBOcKM80ET6TKi1Msu/p.jpeg?fv_content=true&size_mode=5';

  constructor() { }

  ngOnInit() {
  }

}