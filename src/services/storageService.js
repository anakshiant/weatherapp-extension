/**chrome */

export const storeData = async (key, value) => {
  if (process.env.NODE_ENV === "development") {
    await localStorage.setItem(key, value);
  }else{
      // eslint-disable-next-line no-undef
    //   chrome.storage.sync.set({key})
  }
};


export const getData = async (key)=>{
    if(process.env.NODE_ENV === "development"){
        return await localStorage.getItem(key);
    }
}
