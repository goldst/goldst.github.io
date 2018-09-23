'use strict';

module.exports = class FolderOperations {
    static folderPath(filePath) {
        return filePath.match(/(^.*)(?=\/.*$)/)[0];
    }
    
    static pathFromPath(pathFrom, pathTo) {
        //only works if
        //  pathFrom ends on '/': Folder
        //  pathFrom ends on anything else: File
        
        const j = this.jointPathRoot([pathFrom, pathTo]),
            backTravelLength = this.pathLength(j.relativePath[0])-2;
        
        return './' +
            this._dotDotPath(backTravelLength) +
            j.relativePath[1];
    }
    
    static extendPath(pathOriginal, pathRelativeExtent) {
        const splittedOrigPath = pathOriginal.split('/'),
              pathBase = 
                  splittedOrigPath.slice(0, splittedOrigPath.length-1)
                                  .join('/');
        
        return pathBase + '/' + pathRelativeExtent;
    }

    static jointPathRoot(paths) {
        //note: this function is totally unoptimized. It goes through the
        //array too many times. But in this case, that's ok because it 
        //runs only once and with small amounts of data. Feel free to
        //rewrite it though.
        
        const splittedPaths = paths.map(p => p.split('/')),
              shortestPathLength = Math.min(...splittedPaths.map(s => s.length));

        let jointRoot = '';
        for(let i = 0; i < shortestPathLength; i++) {
            //are all splitted paths equal at the _i_th part?
            if(splittedPaths.every(s => s[i] === splittedPaths[0][i])) {
                jointRoot += splittedPaths[0][i] + '/';
            }
        }
        
        return {
            jointRoot: jointRoot,
            relativePath: paths.map(p => p.substring(jointRoot.length))
        }
    }
    
    static pathLength(path) {
        return path.split('/').length;
    }

    static _dotDotPath(length) {
        let out = '';
        for(let i = 0; i<length; i++) {
            out += '../';
        }
        return out;
    }
}