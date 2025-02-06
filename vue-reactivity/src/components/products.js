const nikeSpikes = [
  {
    name: 'Nike Maxfly 2',
    event: 'Sprints',
    price: 190.0,
    color: 'Multiple',
    image: 'maxfly_2.jpg',
    url: 'https://www.nike.com/t/maxfly-2-track-field-sprinting-spikes-fBfStC/HQ2058-600',
  },
  {
    name: 'Nike Victory 2',
    event: 'Distance',
    price: 190.0,
    color: 'Multiple',
    image: 'victory_2.jpg',
    url: 'https://www.nike.com/t/victory-2-track-field-distance-spikes-Xb1b5L/HQ2059-600',
  },
  {
    name: 'Nike Dragonfly 2 Elite',
    event: 'Distance',
    price: 190.0,
    color: 'Multiple',
    image: 'dragonfly_2_elite.jpg',
    url: 'https://www.nike.com/t/dragoy-2-elite-track-field-distance-spikes-btXwxz/FZ9315-102',
  },
  {
    name: 'Nike Dragonfly 2',
    event: 'Distance',
    price: 160.0,
    color: 'Multiple',
    image: 'dragonfly_2.jpg',
    url: 'https://www.nike.com/t/dragoy-2-track-field-distance-spikes-03rvtN/FD8413-102',
  },
  {
    name: 'Nike Superfly Elite 2',
    event: 'Sprints',
    price: 160.0,
    color: 'Multiple',
    image: 'superfly_elite_2.jpg',
    url: 'https://www.nike.com/t/superfly-elite-2-track-field-sprinting-spikes-papBIpGg/FZ9662-600',
  },
  {
    name: 'Nike Rival Sprint',
    event: 'Sprints',
    price: 75.0,
    color: 'Multiple',
    image: 'rival_sprint.jpg',
    url: 'https://www.nike.com/t/rival-sprint-track-field-sprinting-spikes-9Xtr2A3x/HQ2061-600',
  },
  {
    name: 'Nike Rival Multi',
    event: 'Multi-Event',
    price: 75.0,
    color: 'Multiple',
    image: 'rival_multi.jpg',
    url: 'https://www.nike.com/t/rival-multi-track-field-multi-event-spikes-9XKCun4w/HQ2062-600',
  },
  {
    name: 'Nike Rival Distance',
    event: 'Distance',
    price: 75.0,
    color: 'Multiple',
    image: 'zoom_rival_distance.jpg',
    url: 'https://www.nike.com/t/zoom-rival-track-field-distance-spikes-0L3lX202/FZ9653-100',
  },
  {
    name: 'Nike High Jump Elite',
    event: 'High Jump',
    price: 135.0,
    color: 'Multiple',
    image: 'zoom_high_jump_elite.jpg',
    url: 'https://www.nike.com/t/high-jump-elite-track-field-jumping-spikes-PFl1sR/FZ9636-100',
  },
  {
    name: 'Nike Long Jump Elite',
    event: 'Long Jump',
    price: 160.0,
    color: 'Multiple',
    image: 'zoom_rival_sprint.jpg',
    url: 'https://www.nike.com/t/long-jump-elite-track-field-jumping-spikes-pSDffB/FZ9326-600',
  },
  {
    name: 'Nike Pole Vault Elite',
    event: 'Pole Vault',
    price: 130.0,
    color: 'Multiple',
    image: 'pole_vault_elite.jpg',
    url: 'https://www.nike.com/t/pole-vault-elite-track-field-jumping-spikes-haXz2arb/FZ9649-600',
  },
  {
    name: 'Nike Triple Jump Elite 3',
    event: 'Triple Jump',
    price: 125.0,
    color: 'Multiple',
    image: 'zoom_triple_jump_elite.jpg',
    url: 'https://www.nike.com/t/triple-jump-elite-3-track-field-jumping-spikes-4P1SfK/HV6425-600',
  },
  {
    name: 'Nike Zoom Rival SD 2',
    event: 'Shot Put, Discus, Hammer Throw',
    price: 70.0,
    color: 'Multiple',
    image: 'zoom_rival_sd.jpg',
    url: 'https://www.nike.com/t/zoom-rival-sd-2-track-field-throwing-shoes-82lDI7bg/FZ9665-001',
  },
  {
    name: 'Nike Zoom SD 4',
    event: 'Shot Put, Discus, Hammer Throw',
    price: 85.0,
    color: 'Multiple',
    image: 'zoom_sd_throw.jpg',
    url: 'https://www.nike.com/t/zoom-sd-4-track-field-throwing-shoes-XgM5jF/HQ3487-600',
  },
  {
    name: 'Nike Zoom Rotational 6',
    event: 'Shot Put, Discus, Hammer Throw',
    price: 110.0,
    color: 'Multiple',
    image: 'zoom_rotational_throw.jpg',
    url: 'https://www.nike.com/t/zoom-rotational-6-track-field-throwing-shoes-IGCwjJMi/FZ9606-600',
  },
  {
    name: 'Nike Ja Fly 4',
    event: 'Sprinting (100m-400m)',
    price: 120.0,
    color: 'Multiple',
    image: 'zoom_ja_fly.jpg',
    url: 'https://www.nike.com/t/ja-fly-4-track-and-field-sprinting-spikes-hcvHZn/DR2741-601',
  },
  {
    name: 'Nike Zoom Javelin Elite 3',
    event: 'Javelin',
    price: 160.0,
    color: 'Multiple',
    image: 'zoom_rival_jump.jpg',
    url: 'https://www.nike.com/t/zoom-javelin-elite-3-track-field-throwing-spikes-GF8hr5/FZ9626-001',
  },
  {
    name: 'Nike Zoom Mamba 6',
    event: 'Distance',
    price: 120.0,
    color: 'Multiple',
    image: 'zoom_rival_jump.jpg',
    url: 'https://www.nike.com/t/zoom-mamba-6-track-field-distance-spikes-lrzr1g/DR2733-102',
  },
  {
    name: 'Nike ZoomX Dragonfly XC',
    event: 'Cross Country, Distance',
    price: 160.0,
    color: 'Multiple',
    image: 'zoom_rival_jump.jpg',
    url: 'https://www.nike.com/t/zoomx-dragoy-xc-cross-country-spikes-gjBdMM/DX7992-600',
  },
  {
    name: 'Nike Rival XC 6',
    event: 'Cross Country, Distance',
    price: 70.0,
    color: 'Multiple',
    image: 'zoom_rival_jump.jpg',
    url: 'https://www.nike.com/t/rival-xc-6-cross-country-spikes-zcnHpR/DX7999-600',
  },
]
export { nikeSpikes }
