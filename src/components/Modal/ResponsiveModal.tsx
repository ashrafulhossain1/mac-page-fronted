import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import { useSearchParams } from "react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";

interface ResponsiveModalProps {
    modalId: string;
    openId: string;
    closeModals?: string[];
    className?: string;
}

export default function ResponsiveModal({
    openId,
    modalId,
    children,
    closeModals,
    className,
}: PropsWithChildren<ResponsiveModalProps>) {
    const [searchParams, setSearchParams] = useSearchParams();
    const modal = searchParams.get(modalId);
    const isMobile = useIsMobile();

    const isOpen = modal === openId;

    const handleOpenChange = (open: boolean) => {
        if (open) {
            searchParams.set(modalId, openId);
        } else {
            searchParams.delete(modalId);
            if (closeModals && closeModals.length > 0) {
                closeModals.forEach((id) => searchParams.delete(id));
            }
        }
        setSearchParams(searchParams);
    };

    if (!isMobile) {
        return (
            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild hidden />
                <DialogContent
                    className={cn(
                        "max-h-[90dvh] w-full border-none sm:max-w-[425px] overflow-hidden p-0 bg-transparent shadow-none",
                        className
                    )}
                    showCloseButton={false}
                >
                    <DialogHeader hidden>
                        <DialogTitle hidden />
                        <DialogDescription hidden />
                    </DialogHeader>
                    <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                        {children}
                    </div>
                    <DialogFooter hidden />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild hidden />
            <DrawerContent className={cn("max-h-[90vh]", className)}>
                <DrawerHeader hidden>
                    <DrawerTitle hidden />
                    <DrawerDescription hidden />
                </DrawerHeader>
                <div className="p-0">
                    {children}
                </div>
                <DrawerFooter hidden className="pt-2">
                    {/* <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
