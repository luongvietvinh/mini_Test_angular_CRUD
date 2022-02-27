import { Injectable } from '@angular/core';
import {Tuor} from "../model/Tuor";

@Injectable({
  providedIn: 'root'
})
export class TuorService {

  constructor() { }
  tuors : Tuor[] = [
    new Tuor(1,"tuor nha trang" , 550000,1,"Vinpearl Condotel Beachfront Nha Trang với những căn hộ khách sạn có tầm nhìn hướng biển, không chỉ mang đến cho du khách sự tiện nghi, thoải mái, mà còn là cảm nhận trọn vẹn về những bãi biển đầy nắng gió của vịnh Nha Trang"),
    new Tuor(2,"tuor cát bà" , 5550000,2,"Đến Cát Bà, du khách sẽ bị hút hồn trước vẻ đẹp của biển với những bãi cát trắng phau, mịn màng, những núi đá vôi với hang động kỳ thú. Cát Bà có nhiều bãi tắm, đặc trưng là sự kín đáo, yên bình. Hai bãi tắm lý tưởng nhất là Cát Cò và Cát Dứa. Nước biển trong xanh nhìn rõ cát vàng dưới đáy. Hãy đồng hành cùng KỲ NGHỈ ĐÔNG DƯƠNG trong hành trình du lịch Cát Bà 2 ngày 1 đêm để có những trải nghiệm thú vị nhất!"),
    new Tuor(3,"tuor hạ long bay" , 9950000,1," hệ thống các danh hiệu của UNESCO, di sản thế giới là danh hiệu danh giá nhất và lâu đời nhất mà Vịnh Hạn Long nằm trong top di sản thiên nhiên thế giới. Chính vì lý do đó Vịnh Hạ Long đã và đang thu hút lượng lớn khách du lịch cả trong và ngoài nước."),
    new Tuor(4,"tuor phú quốc" , 9550000,1," hệ thống các danh hiệu của UNESCO, di sản thế giới là danh hiệu danh giá nhất và lâu đời nhất mà Vịnh Hạn Long nằm trong top di sản thiên nhiên thế giới. Chính vì lý do đó Vịnh Hạ Long đã và đang thu hút lượng lớn khách du lịch cả trong và ngoài nước."),
  ]

  delete(id: number): void {
    for (let i = 0; i < this.tuors.length; i++) {
      if (id === this.tuors[i].id) {
        this.tuors.splice(i, 1);
      }
    }
  }

  create(tuor: Tuor){
    let check=true;

    for (let i = 0; i < this.tuors.length; i++) {
      if (this.tuors[i].id === tuor.id) {
        this.tuors[i] = tuor;
        check = false;
      }
    }

    if (check){
      this.tuors.push(tuor);
    }
  }


}
