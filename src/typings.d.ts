/* wildcard module definition that allows us to import non javascript files */
declare module "*.json" {
    const value: any[];
    export default value;
}
