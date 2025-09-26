import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { notFound } from "next/navigation";
import { db } from "../_lib/prisma";
import Header from "../_components/header";
import BookingItem from "../_components/booking-item";

const Bookings = async () => {
    const session = await getServerSession(authOptions)
    if(!session?.user) {
        return notFound()
    }

    const confirmedBookings = await db.booking.findMany({
        where: {
            userId: session.user.id,
            date: {
                gte: new Date()
            }
        },
        include: {
            service: {
                include: {
                    barbershop: true
                }
            }
        },

        orderBy: {
            date: "asc"
        }
    })

    const concludedBookings = await db.booking.findMany({
        where: {
            userId: session.user.id,
            date: {
                lt: new Date()
            }
        },
        include: {
            service: {
                include: {
                    barbershop: true
                }
            }
        }
    })
    
    return (
        <>
            <Header />
            <div className="space-y-3 p-5">
                <h1 className="text-xl font-bold">Agendamentos</h1>
                {confirmedBookings.length > 0 && (
                    <>
                        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Confirmados</h2>
                        {confirmedBookings.map(booking => <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))}/>)}
                    </>
                )}

                {concludedBookings.length > 0 && (
                    <>
                        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Finalizados</h2>
                        {concludedBookings.map(booking => <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))}/>)}
                    </>
                )}
            </div>

        </>
    )

}

export default Bookings;