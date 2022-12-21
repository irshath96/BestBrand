import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrls: ['./pulses.component.scss']
})
export class PulsesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Black Eye Beans (CHAWLI)",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/BLACK-EYE-BEANS-CHOLI.jpg"
    },
    {
      name: "Black Urad Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/BLACK-URAD-DAL.jpg"
    },
    {
      name: "Black Urad whole",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/BLACK-URAD-WHOLE.jpg"
    },
    {
      name: "Chana Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/CHANA-DAL.jpg"
    },
    {
      name: "Chana Green",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/CHANA-GREEN.jpg"
    },
    {
      name: "Green Moong Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2021/10/GREEN-MOONG-DAL.jpg"
    },
    {
      name: "Green Moong Whole",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/GREEN-MOONG-WHOLE.jpg"
    },
    {
      name: "Green Vatana",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/GREEN-VATANA.jpg"
    },
    {
      name: "Kabuli Chana",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/KABULI-CHANA.jpg"
    },
    {
      name: "Masoor Whole",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/MASOOR-WHOLE.jpg"
    },
    {
      name: "Mix Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/MIX-DAL.jpg"
    },
    {
      name: "Mix Kathol",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/MIX-KATHOL.jpg"
    },
    {
      name: "Muth Whole",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/MUTH-WHOLE.jpg"
    },
    {
      name: "Oily Toor Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/OILY-TOOR-DAL.jpg"
    },
    {
      name: "Orange Rajma",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/ORANGE-RAJMA.jpg"
    },
    {
      name: "Rajma",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/RAJMA.jpg"
    },
    {
      name: "Red Chana",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/RED-CHANA.jpg"
    },
    {
      name: "Red Masoor Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/RED-MASOOR-DAL.jpg"
    },
    {
      name: "Toor Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/TOOR-DAL.jpg"
    },
    {
      name: "Vaal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/VAAL.jpg"
    },
    {
      name: "White Urad Gota",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/WHITE-URAD-GOTA.jpg"
    },
    {
      name: "White Urid Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/WHITE-URAD-DAL.jpg"
    },
    {
      name: "white Vatana",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/WHITE-VATANA.jpg"
    },
    {
      name: "Yellow Moong Dal",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/YELLOW-MOONG-DAL.jpg"
    }
  ]

}
