const nftsContainer = document.querySelector(".nfts-container")
const menu_btn = document.querySelector(".menu-btn")
const action_wrapper = document.querySelector(".action-wrapper")

const nft_lists = [
    "./assets/nfts/skull.jpg",

    "./assets/nfts/hallowen.jpg",

    "./assets/nfts/apes.jpg",

    "./assets/nfts/monkey.jpg",

    "./assets/nfts/pudgy-penguins.jpg",

    "./assets/nfts/cool-cats.jpg",

    "./assets/nfts/gutter-cat-gang.jpg",

    "./assets/nfts/droid.jpg"

]

nft_lists.forEach(nft => {
    const nft_card = document.createElement('div')
    nft_card.classList.add("nft-card");
    nft_card.innerHTML = `
    <img src="${nft}" alt="" class="nft-image">
    <div class="nft-detail">
        <div>
            <h3>Cup of tea #1</h3>
            <img src="./assets/nfts/hallowen.jpg" alt="" class="author">
        </div>
        <div class="card-action">
            <div class="price">
                <span>Current bid:</span>
                <span class="nft-price">0.002 BTC</span>
            </div>
            <div>
                <button class="bid-btn">Place a bid</button>
    
            </div>
        </div>`
    nftsContainer.append(nft_card)

});


menu_btn.addEventListener("click", () => {
    action_wrapper.classList.toggle("active")
})