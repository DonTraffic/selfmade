function createSlider (name) {
    let slider = document.getElementById(name)
    slider.setAttribute('sliderCount', 1)

    let wrapper = slider.querySelector('.slider__wrapper')
    let items = slider.querySelector('.slider__wrapper_items')

    let prev = slider.querySelector('.slider__arrow_prev')
    let next = slider.querySelector('.slider__arrow_next')

    next.addEventListener('click', () => {
        let count = Number(slider.getAttribute('sliderCount')) // обнавляем значение количества прокруток слайдера

        if ((wrapper.offsetWidth * count) + wrapper.offsetWidth > items.offsetWidth) { // если это последняя прокрутка 
            items.style.transform = `translateX(-${items.offsetWidth - wrapper.offsetWidth}px)` // перемещаем ленту с элементами
            next.style.display = 'none' // обнавляеем состояние кнопки
        } else { // если не последняя прокрутка
            items.style.transform = `translateX(-${wrapper.offsetWidth * count}px)` // перемещаем ленту с элементами 
            next.style.display = 'flex' //обнавляеем состояние кнопки
        }

        prev.style.display = 'flex' // обнавляеем состояние кнопки
        slider.setAttribute('sliderCount', count + 1) // обнавляеем количество прокруток

    })

    prev.addEventListener('click', () => {
        let count = Number(slider.getAttribute('sliderCount')) // обнавляем значение количества прокруток слайдера

        items.style.transform = `translateX(-${(wrapper.offsetWidth * (count - 1)) - wrapper.offsetWidth}px)`  // перемещаем ленту с элементами
        slider.setAttribute('sliderCount', count - 1)  // уменьшаем текущее количество прокруток
        next.style.display = 'flex'  // меняем видимость кнопки

        count == 2 ? prev.style.display = 'none' : false; // меняем видимость кнопки

    })

    window.onresize = () => { // очищаем состояние слайдера при изменении размера экрана (что бы избежать ошибок)
        slider.setAttribute('sliderCount', 1)
        items.style.transform = `translateX(0px)`
        prev.style.display = 'none'
        next.style.display = 'flex'
    };

}

createSlider('slider__header')
