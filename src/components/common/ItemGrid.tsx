import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import CTA from './CTA';
import Image from 'next/image';

const ItemGrid = ({
  id,
  items,
  columns,
  defaultColumns,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
  isImageDisplayed,
}: ItemGridType & { isImageDisplayed?: boolean }) => {
  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
                : (columns || defaultColumns) === 3
                  ? 'lg:grid-cols-3 sm:grid-cols-2'
                  : (columns || defaultColumns) === 2
                    ? 'sm:grid-cols-2'
                    : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon: Icon, callToAction, image }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
                {isImageDisplayed && image && (
                  <div className="flex justify-center">
                    <Image
                      className="w-300 h-300 rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700 transition-transform transform-gpu hover:scale-105 duration-500"
                      src={image.src}
                      alt={image.alt}
                      quality={50}
                    />
                  </div>
                )}
                <div className="mt-0.5">
                  <div className="flex justify-center">
                    {callToAction && callToAction.href ? (
                      <a href={callToAction.href} className="cursor-pointer" rel="noopener noreferrer">
                        {image && (
                          <div className="flex justify-center m-2">
                            <Image
                              className="w-300 h-300 rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700 transition-transform transform-gpu hover:scale-105 duration-500"
                              src={image.src}
                              alt={image.alt}
                              quality={50}
                              width={300}
                              height={300}
                            />
                          </div>
                        )}
                      </a>
                    ) : (
                      <>
                        {Icon ? (
                          <Icon className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                        ) : DefaultIcon ? (
                          <DefaultIcon className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                        ) : null}
                      </>
                    )}
                  </div>
                  {title && <h3 className={twMerge('text-xl font-bold', titleClass)}>{title}</h3>}
                  {description && (
                    <p
                      className={twMerge(`text-gray-600 dark:text-slate-400 ${title ? 'mt-3' : ''}`, descriptionClass)}
                    >
                      {description}
                    </p>
                  )}
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      linkClass={twMerge(
                        `${
                          title || description ? 'mt-3' : ''
                        } text-primary font-bold text-zinc-900 hover:underline dark:text-gray-200 cursor-pointer`,
                        actionClass,
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemGrid;
