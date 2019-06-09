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
    
});

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
});

$(function(){
    const particles = Particles.init({
    selector: '.background',
  sizeVariations: 30,
  color: ['#dcdddd', '#231815', '#888283'],
  connectParticles: true
});

});