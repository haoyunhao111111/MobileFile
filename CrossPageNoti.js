/*
*   跨页面通知
 */
class CrossPageNoti {
    constructor(key) {
        this.key = key || 'CrossPageNoti';
    }
    clear() {
        localStorage.removeItem(this.key);
    }
    changePath(path,params) {
        let value = Object.assign({ path: path }, params);
        localStorage.setItem(this.key, JSON.stringify(value));
        this.clear();
    }
    triggerMethod(currentPath,callback,...args) {
        window.addEventListener('storage', (e) => {
            if (this.key == e.key && !Object.is(e.newValue, null) && currentPath === JSON.parse(e.newValue).path ) {
                callback(...args);
            }
        })
    }

}
export default CrossPageNoti;
