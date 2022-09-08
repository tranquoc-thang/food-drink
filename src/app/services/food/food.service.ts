import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  // getAll(): string[] {
  //   return [
  //     '../../assets/bach-tuoc-0.jpg',
  //     '../../assets/ca-cam-0.jpg',
  //     '../../assets/ca-trich-ep-trung-nhat-0.jpg',
  //     '../../assets/ca-trung-nhat-0.jpg',
  //     '../../assets/coi-diep-0.jpg',
  //     '../../assets/hau-sua-nhat-0.jpg',
  //     '../../assets/luon-nuong-nhat-0a.jpg',
  //     '../../assets/shime-saba-0.jpg',
  //     '../../assets/so-do-0.jpg',
  //     '../../assets/thanh-cua-0a.jpg',
  //     '../../assets/trung-ca-hoi-nhat-20g-0.jpg',
  //     '../../assets/trung-ca-hoi-nhat-50g-0.jpg',
  //   ];
  // }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Bạch Tuột',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '../../assets/bach-tuoc-0.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 2,
        name: 'Cá Cam',
        cookTime: '15-20',
        price: 8,
        favorite: false,
        origins: ['Viet Nam'],
        stars: 5,
        imageUrl: '../../assets/ca-cam-0.jpg',
        tags: ['Fish', 'Seafood', 'Fresh food'],
      },
      {
        id: 3,
        name: 'Cá Trích Ép Trứng Nhật',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['Japan'],
        stars: 5,
        imageUrl: '../../assets/ca-trich-ep-trung-nhat-0.jpg',
        tags: ['Fish', 'Seafood', 'Fresh food'],
      },
      {
        id: 4,
        name: 'Cá Trứng Nhật',
        cookTime: '5-10',
        price: 24,
        favorite: false,
        origins: ['Japan'],
        stars: 4,
        imageUrl: '../../assets/ca-trung-nhat-0.jpg',
        tags: ['Fish', 'Seafood', 'Fresh food'],
      },
      {
        id: 5,
        name: 'Cồi Điệp',
        cookTime: '5-10',
        price: 6,
        favorite: true,
        origins: ['China'],
        stars: 4.2,
        imageUrl: '../../assets/coi-diep-0.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 6,
        name: 'Hàu Sữa Nhật',
        cookTime: '5-15',
        price: 5,
        favorite: true,
        origins: ['Japan'],
        stars: 3.5,
        imageUrl: '../../assets/hau-sua-nhat-0.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 7,
        name: 'Lươn Nướng Nhật',
        cookTime: '20-30',
        price: 18,
        favorite: true,
        origins: ['Japan'],
        stars: 3.5,
        imageUrl: '../../assets/luon-nuong-nhat-0a.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 8,
        name: 'Shime Saba',
        cookTime: '10-20',
        price: 5,
        favorite: false,
        origins: ['Korea'],
        stars: 5,
        imageUrl: '../../assets/shime-saba-0.jpg',
        tags: ['Fish', 'Seafood', 'Fresh food'],
      },
      {
        id: 9,
        name: 'Sò Đỏ',
        cookTime: '5-10',
        price: 6,
        favorite: false,
        origins: ['China'],
        stars: 4.5,
        imageUrl: '../../assets/so-do-0.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 10,
        name: 'Thanh Cua',
        cookTime: '15-20',
        price: 8,
        favorite: true,
        origins: ['Viet Nam'],
        stars: 3,
        imageUrl: '../../assets/thanh-cua-0a.jpg',
        tags: ['Seafood', 'Fresh food'],
      },
      {
        id: 11,
        name: 'Trứng Cá Hồi Nhật 20g',
        cookTime: '5-10',
        price: 22,
        favorite: true,
        origins: ['Japan'],
        stars: 3.7,
        imageUrl: '../../assets/trung-ca-hoi-nhat-20g-0.jpg',
        tags: ['Eggs', 'Seafood', 'Fresh food'],
      },
      {
        id: 12,
        name: 'Trứng Cá Hồi Nhật 50g',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '../../assets/trung-ca-hoi-nhat-50g-0.jpg',
        tags: ['Eggs', 'Seafood', 'Fresh food'],
      },
      {
        id: 13,
        name: 'Thăn Ngoại U Bò',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 5,
        imageUrl: '../../assets/than-ngoai-u-bo-0.jpg',
        tags: ['Meat', 'Fresh food'],
      },
      {
        id: 14,
        name: 'Ba Chỉ Greater Omaha',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '../../assets/ba-chi-greater-omaha-0b.jpg',
        tags: ['Meat', 'Fresh food'],
      },
      {
        id: 15,
        name: 'Thăn Lưng',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '../../assets/than-lung-s-0.jpg',
        tags: ['Meat', 'Fresh food'],
      },
      {
        id: 16,
        name: 'Vang Chile Casadonoso Bicentenario',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.5,
        imageUrl: '../../assets/vang-chile-casadonoso-bicentenario-1.jpg',
        tags: ['Drinks', 'Wine'],
      },
      {
        id: 17,
        name: 'Vang Phap Chateau Laubes Terre De Coteau Red',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.2,
        imageUrl:
          '../../assets/vang-phap-chateau-laubes-terre-de-coteau-red-0.jpg',
        tags: ['Drinks', 'Wine'],
      },
      {
        id: 18,
        name: 'Soju Táo Chum Churum',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Japan'],
        stars: 4.9,
        imageUrl: '../../assets/soju-tao-chum-churum-0.jpg',
        tags: ['Drinks'],
      },
    ];
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag === 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 18 },
      { name: 'Fish', count: 4 },
      { name: 'Eggs', count: 2 },
      { name: 'Meat', count: 3 },
      { name: 'Drinks', count: 3 },
      { name: 'Seafood', count: 12 },
      { name: 'Fresh food', count: 15 },
      { name: 'Wine', count: 2 },
    ];
  }

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id === id)!;
  }
}
