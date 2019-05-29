<upload>
    <div id="upload" class="page">
        <form id="uploadForm" class="mainForm">
            <div id="text">
                <h1 id="centerText">Before You Sell It ...</h1>
                <p id="centerSlogan">Let us ask you a few questions</p>
            </div>
            <div id="feelingBox" class="bigBox">
                <div>
                        <p>How do you feel right now?</p>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div class="bigBox">
                <div>
                    <p>Title</p>
                    <input id="upLoadTitle" required>
                </div>
                <div>
                    <p>Photo(max. 5)</p>
                    <div>
                        <input id="upLoadPhoto1" type="file" required>
                        <input id="upLoadPhoto2" type="file">
                        <input id="upLoadPhoto3" type="file">
                    </div>
                </div>
                <div>
                    <p>Price (vnđ)</p>
                    <input id="upLoadPrice" required>
                </div>
                <div>
                    <p>Select category</p>
                    <select id="upLoadCategory" required>
                        <option></option>
                        <option>Accessories</option>
                        <option>Boys Stuff</option>
                        <option>Bridal</option>
                        <option>Girls Stuff</option>
                        <option>Jewelry</option>
                        <option>Weird Stuff</option>
                        <option>Random Stuff</option>
                    </select>
                </div>
                <div>
                    <p>What are you selling?</p>
                    <input id="upLoadItem">
                </div>
                <div>
                    <p>Why do you sell it?</p>
                    <input id="upLoadReason">
                </div>
                <div>
                    <button id="sellButton" type="submit">Sell It</button>
                </div>
            </div>
        </form>
    </div>
</upload>