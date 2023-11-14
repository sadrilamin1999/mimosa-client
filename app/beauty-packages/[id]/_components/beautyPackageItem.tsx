import { beautyPackageType } from '@/types/beautyPackages';
import Image from 'next/image';
import SectionTitle from './../../../../components/ui/SectionTitle';

interface BeautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<BeautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2'>
      <div className='flex h-full w-full'>
        <Image
          src={item.images[0]}
          alt={item.title}
          width={1280}
          height={720}
          priority
          className='h-full w-full overflow-hidden object-cover'
        />
      </div>
      <div className='h-full w-full'>
        <SectionTitle title={item.title} />
        <p>{item.description}</p>
      </div>
    </section>
  );
};

export default BeautyPackageItem;
