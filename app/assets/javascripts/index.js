// $(function(){
//     const target = document.getElementsByClassName('target');
//     // const target = document.getElementById('target_1');
//     target.addEventListener('mouseenter',function(){
//      target.style.background ='rgba(0, 0, 0, 1)';
//     },false);
//     target.addEventListener('mouseleave',function(){
//         target.style.background='rgba(179, 179, 179, 1)';
//     });
//     const target_1 = document.getElementById('target_1');
//     target_1.addEventListener('mouseenter',function(){
//      target_1.style.background='rgba(179, 179, 179, 1)';
//     //  target_1.textContent = 'こんにちは';

//     },false);
//     target_1.addEventListener('mouseleave',function(){
//         target_1.style.background='rgba(26, 25, 23, 1)';
//     });
// });
// $(function(){
//     const target = document.getElementsByClassName('port_forio_area_1_1');
//     target.addEventListener('mouseenter',function(){
//         target.style.background = 'rgba(0, 0, 0, 1)';
//     },false);
//     target.addEventListener('mouseleave',function(){
//         target.style.background = 'rgba(26, 25, 23, 1)';
//   });
// });

// $(function(){
//     $('.target').hover( () => {
 
// 　　$('.target').css(`background`,`rgba(0, 0, 0, 1)`);
 
//  }, function() {
 
// 　　$('.target').css(`background`,`rgba(26, 25, 23, 1)`);
 
//   });
// });

// $(function(){
//     const target = document.getElementById('target');
//     // const target = document.getElementById('target_1');
//     target.addEventListener('mouseenter',function(){
//      target.style.background='rgba(0, 0, 0, 1)';
//     },false);
//     target.addEventListener('mouseleave',function(){
//         target.style.background='rgba(26, 25, 23, 1)';
//     });
//     const target_1 = document.getElementById('target_1_2');
//     target_1.addEventListener('mouseenter',function(){
//      target_1.style.background='rgba(26, 25, 23, 1)';
//     },false);
//     target_1.addEventListener('mouseleave',function(){
//         target_1.style.background='rgba(0, 0, 0, 1)';
//     });
// });

$(function(){
    const name = document.getElementById('my_name');
    const name_Lists = [
        'KOJIMA KAN',
        '寛',
        'こじま　かん',
        'KAN',
        ];
    let rnd = Math.floor(Math.random()* name_Lists.length);   
    name.textContent = name_Lists[rnd];
    
})

$(function(){
    const dis = document.getElementById('title_dis')
    const title_Lists= [
        'デザインって日常生活に密接しています',
        'Age is a just number',
        'みなさん挑戦してますか?',
        'Design in fun!',
        'みなさんこんにちは。こじまかんのポートフォリオサイトです。',
        ];
        let rnd = Math.floor(Math.random()* title_Lists.length);
        dis.textContent = title_Lists[rnd];
});
$(function(){
    const title = document.getElementById('footer_title')
    const footer =[
        '仕事くれ!',
        '働いたら負けだとおもう',
        'お仕事大好き',
        'コンタクト',
        ];
        let rnd = Math.floor(Math.random()* footer.length);
        title.textContent = footer[rnd];
})

$(function(){
    var particles = Particles.init({
    selector: '.background',
  sizeVariations: 30,
  color: ['#dcdddd', '#231815', '#888283'],
  connectParticles: true
});

});