import {UsersProvider} from "./base/users";
import AuthProvider from "./base/auth";
import {UserProvider} from "./base/user";

const aggregation = (baseClass: any, ...mixins: any) => {
  const base = class _Combined extends baseClass {
    constructor(...args: any) {
      super(...args);
      mixins.forEach((mixin: any) => {
        mixin.prototype.initializer.call(this);
      });
    }
  };
  const copyProps = (target: any, source: any) => {
    Object.getOwnPropertyNames(source)
      // @ts-ignore
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {
        if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) return;
        // @ts-ignore
        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
      });
  };
  mixins.forEach((mixin: any) => {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

class ApiProvider extends aggregation(
  UserProvider,
  UsersProvider,
  AuthProvider,
) {
}

export default ApiProvider;
