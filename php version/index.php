<? $itcBannerItems = get_field('slajder'); //получаем все слайды (массив)
if ($itcBannerItems) : 
    $i = 0; ?>
    <div class="carousel__main-page">
        <div class="slider__main-page">
            <span class="left__main-page"><img src="/wp-content/uploads/2023/11/left.svg" alt="" /></span>
            <span class="right__main-page"><img src="/wp-content/uploads/2023/11/right.svg" alt="" /></span>
            <? foreach ($itcBannerItems as $itcBannerItem) :
            ?>
                <div class="slide__main-page">                  
                        <img src="<?= $itcBannerItem['slajd']; ?>" alt=""/>                      
                </div>
            <? $i++;
            endforeach; ?>
        </div>
    <? endif; ?>
    </div>