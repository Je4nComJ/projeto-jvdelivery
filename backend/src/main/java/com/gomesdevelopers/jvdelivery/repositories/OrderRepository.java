package com.gomesdevelopers.jvdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gomesdevelopers.jvdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
