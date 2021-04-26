<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar"><img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"></div>
            <div class="content">
                <div class="title"><span class="brand"></span><span class="name">粥品香坊（回龙观）</span></div>
                <div class="description">
                蜂鸟专送/38分钟送达
                </div>
                <div class="support"><span data-v-3e101e83="" class="support-ico icon-1 decrease"></span><span class="text">在线支付满28减5</span></div>
            </div>
            <div class="support-count"><span class="count">5个</span><i class="icon-keyboard_arrow_right"></i></div>
        </div>
        <div class="bulletin-wrapper"><span class="bulletin-title"></span><span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span><i class="icon-keyboard_arrow_right"></i></div>
        <div class="background"><img width="100%" height="100%" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"></div>
    </div>
</template>
<script>
export default{
    name:'CartHeader'
}
</script>
<style lang="scss" scoped>

.header {
    background: rgba(7,17,27,.5);
    color: #fff;
    overflow: hidden;
    position: relative
}

.header .content-wrapper {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative
}

.header .content-wrapper .avatar {
    -ms-flex: 0 0 64px;
    -webkit-box-flex: 0;
    flex: 0 0 64px;
    margin-right: 16px;
    width: 64px
}

.header .content-wrapper .avatar img {
    border-radius: 2px
}

.header .content-wrapper .content {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1
}

.header .content-wrapper .content .title {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 8px
}

.header .content-wrapper .content .title .brand {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhCMERGODc0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhCMERGODg0RDYwMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OEIwREY4NTRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OEIwREY4NjRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpkNE6kAAAOnSURBVHja7Fm/M2NRFL75wSaxsxoKBX8BnYqKjoaSSmFnVHTMFootaOiomNlCp6ShVNHp6FTMrh2aZdaSZCN7v+OdzMl138t9eTEbSc7MneTFyb33O/ec73w3Yr+6usaUUt/06FGNbdd6zMY04B9NALYEOt5EYGE9cdVk1gLc6Jb4ksl8dXH8MDenkqOjKjkwoGKpFH1WvL/3j2Rvr+rY3yffwump22b6+1Vme5u+m+jrU4Wzs9f7WFxU6dVVlRgcJB+VzarizY0zYLB00cWxY29PJYeHS89/j49pBAUo1tlJ7/MHB+pxYUEV7+5ebT61tETAaL7DQ1qH53+YnCSf4tWVesa4vFQfj45K8+J7j/Pz9Iq9Be2HLVltamABGYAgaxsfp9c/MzO+J4tgALBpCAgbgJlBhGV2dmiN7NaWelpefhvAud1dldcjKCOkZdfXo9efDowMIgdSZhV8EFgzmyIDRnq5pJA8naiW8wLcPjVVVlbt09NU97Qvnfp+YN8dS+eNrAJYZA6CL33eJKXjmiFda7gaQ62mVlbKucA7WckjvBdn7ql2Q0irdmMDUetTAsSzrFmZytUQZ/Qa9tpEEIuHPdGEx8B+xgzMgWHixLMZnJoAZpB4xUJBpCX7qYtx3zWt8/bWl/iYOINIKhRgpFBybOxFGOgeiT7Hp0GCQC/Em0CU8TmdulZgcvOYB/6urclPRJg1DXaGr+vpVgQc01Qv+50Eh0XQ95BmCASeZRqzb2JoqCQe4GNTXCZRIUA2EWECQyvidvQmNWyKCQYft0TY5ovAJbQWf5iYoLIwT/XTxUW5dvcCyKVEde6tJVtSenOTfBHISukdCvDT2loplWRkC3rxuMGg7GsyKTZqgqWLiFce0hfy8ffICAFNb2yU/Y3nxXzQ07Y5IwPmGsRCDBgLgi3NHinrtQyEjzAAWNS9JCnMwSkuNTT6rkxvgIUP5qik6OpGadlICqAAFANAUNM5fX006x7pj7TGTaqSNkiqOrY2IW5IiBgsbfscGZHXHaXml4daW+HkxFpC1iujEBp88rI3BxFX/QC21B7dkS2pLgH5+dS0Lbk0evYNEvZMZgAbRi1FsVCAw+hjF19m3pyn4OruV8u77m4aLinEvtyPrZcF76edvKVO/8sJg0iwYZNQQBLcKjgV+TJh+j6fn7+A1vra7JOYx1RHLEyCbmJyrbCl4PyrZaNY6z8PLcAtwO8f8HUT4f0JwJ/xpgnAftdj9p8AAwCeZRLH3XUY/AAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 30px 18px;
    height: 18px;
    width: 30px
}


.header .content-wrapper .content .title .name {
    font-size: 16px;
    font-weight: 700;
    margin-left: 6px
}

.header .content-wrapper .content .description {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 8px
}

.header .content-wrapper .content .support {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.header .content-wrapper .content .support .support-ico {
    margin-right: 4px
}

.header .content-wrapper .content .support .text {
    font-size: 10px;
    line-height: 12px
}

.header .content-wrapper .support-count {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgba(7,17,27,.2);
    border-radius: 14px;
    bottom: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    position: absolute;
    right: 12px;
    text-align: center
}

.header .content-wrapper .support-count .count {
    font-size: 10px
}

.header .content-wrapper .support-count .icon-keyboard_arrow_right {
    font-size: 10px;
    line-height: 24px;
    margin-left: 2px
}

.header .bulletin-wrapper {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgba(7,17,27,.2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    position: relative
}

.header .bulletin-wrapper .bulletin-title {
    -ms-flex: 0 0 22px;
    -webkit-box-flex: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAYCAYAAACBbx+6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjk0NDhEMDg0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk0NDhEMDk0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOTQ0OEQwNjREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOTQ0OEQwNzREOEYxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puq6d8sAAAM6SURBVHja1FdLTFNBFL0YdrZbS7cI7vjuqoZEI0EwGhKIGkxABbugKNJFaWJ1IZC0JLapKS6IqDVKRK2BxL+uiIaVIrqTzw7aurTt+vnOwAzT+qYfNeo7ycvrm++59557Z1qmaVorEU3pj53+b8T1p7dMJ7xhArKCNAhrZCLsIJOhvJhB8+8WqKG+hqwWy3ZsEkn2NNbXFo6jPg6wV9jY+9nLN7S49IV9V++upKb9jj9HGJt5r4yQxbKTmvY5yDfspuXVNXINDbP+2PTtLEOMMOD2snVAcLDfSYnkN3r+6i3ra6irKYlwQUlMRe+zdzqdEZ6CV3hbeGIy7/yPnz6LeYygHikVUuk0cwQcokLepMMCLceOi+9I0C8k8ODxLF2/sUn2kmeIjhxuNlwDBBD+UoBoRicjQkJFS+JhbG7bM3roZL2e7GynR0/mmPfGxkOsLZc0vMvJ9vacYmsAkAOXBKI16HJmzbNaLYZk8xIGkZnYrLAY2uXJAi1Dd/As9AkYkeZyAVk8HLLHsXYxiVtQw9AuNAogUWDxrbvTzDNIQoQaG7W1HBJzQDqsywRSAnxeN/mvXs4iWwjQb0fXGaWOy1WJwkMGQvAavCsnz4mO9k1j9HAur6yJDWZ0bXMjes4NFCQIb+892GaofSMd/5R08M5p53lGDhtDCgCs5oTldu4VbICIyOGH4SWdu1ulj+uYV6MsaDnYiCe05qOd2oj/mmi7eeee5jjQyp7uPpf2PZVi7R8Wl1gf8HVlVeu/6MldjrXxeRijwtMXr9k4jOfrG8GwrMmWwuPwLryHBJkIBYTl3Ou5SfXXy5o8cCwQyko+OUxnu7tYoiFBizliL+jz91RVGvbJpa6xrrb0ssbP/Pn3C8rDAd+oHPDy6HiQolUR5UYAyKpKmByFaoVReQmDbHjrJEOIcP6PBoIi8fAtVw1EAf2QzD+5rYEQlwLe/E4hg8uA98FLuNmppIGDBMar9vstwihduST58Qyi8nUTJOPJJPk87rw6RqhVksm9JP3S5QeyACm73WZcE6U6XGHbZXjNxCUpk8mwfhijuoqCMK9EMEw1zpR/keIm4psA4T78MAHZdVz8fggwAAhHLI5JzyRSAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: 22px 12px;
    flex: 0 0 22px;
    height: 12px;
    margin-right: 4px;
    width: 22px
}

@media (-webkit-min-device-pixel-ratio: 3),(min-resolution:3dppx) {
    .header .bulletin-wrapper .bulletin-title {
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAkCAYAAAA9+eyvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjk0NDhEMDQ0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjk0NDhEMDU0RDhGMTFFNkJGNzlFOUVCREZEMzI2ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OEIwREY4OTRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OEIwREY4QTRENjAxMUU2QkY3OUU5RUJERkQzMjY4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuETwggAAAuGSURBVHja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)
    }
}

.header .bulletin-wrapper .bulletin-text {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.header .bulletin-wrapper .icon-keyboard_arrow_right {
    -ms-flex: 0 0 10px;
    -webkit-box-flex: 0;
    flex: 0 0 10px;
    font-size: 10px;
    width: 10px
}

.header .background {
    -webkit-filter: blur(10px);
    filter: blur(10px);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1
}
</style>